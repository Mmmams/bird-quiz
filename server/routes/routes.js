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
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      }
      const { email, password } = req.body;
      const candidade = await User.findOne({ email });
      if (candidade) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким email уже существует!" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword, level: 1 });
      await user.save();

      res.status(201).json({ message: "Пользователь создан" });
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
      res.json({ token, userId: user.id });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Что то пошло не так, попробуйте снова" });
    }
  }
);

module.exports = router;
