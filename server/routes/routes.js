const { Router } = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const Bird = require("../models/Bird");
const User = require("../models/User");
const router = Router();

router.get("/getdata", async (req, res) => {
  try {
    const birds = await Bird.find({});
    res.json(birds);
  } catch (err) {
    res.status(500).json({ message: "Что то пошло не так" });
  }
});

router.post(
  "/signup",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимальая длина пароля 6 символов").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("errors", errors);
        res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      }
      const { email, password } = req.body;
      const candidade = await User.findOne({ email });
      if (candidade) {
        console.log("candidade", candidade);
        res
          .status(400)
          .json({ message: "Пользователь с таким email уже существует!" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        email,
        password: hashedPassword,
        currentLevel: 1,
      });
      await user.save();
      console.log(user);
      await res.status(201).send({ success: "Пользователь успешно создан!" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Что то пошло не так, попробуйте снова" });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Введите корректный email").normalizeEmail().isEmail(),
    check("password", "Неверный пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: "Такого пользователя не существует" });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Неверный пароль" });
      }
      const token = jwt.sign({ userId: user.id }, process.env.jwtSecret, {
        expiresIn: "1h",
      });
      res.json({ token, userId: user.id, email, level: user.currentLevel });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Что то пошло не так, попробуйте снова" });
    }
  }
);
router.patch("/updateLevel", async (req, res) => {
  console.log("REQBODY", req.body);
  const { email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.error("ERROR", err);
    }
    console.log(user);
    user.currentLevel = user.currentLevel + 1;
    user.save(user);
    res.json(user.currentLevel);
  });
  // const user = await User.findOne({ email });
  // console.log(user);
  // user.update({ currentLevel: 5 });
  // res.json(user.currentLevel);
});

module.exports = router;
