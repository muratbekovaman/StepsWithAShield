<div align="center">
  <br />
    <a href="https://youtu.be/zgGhzuBZOQg" target="_blank">
      <img src="https://github.com/muratbekovaman/StepsWithAShield/blob/main/public/assets/banne.jpg" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS_14-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
  </div>

  <h3 align="center">Steps with a shield</h3>

   <div align="center">
    Проект был создан для Хакатона ITEENS 2024 
    </div>
</div>


## <a name="tech-stack">⚙️ Мой использованный "FULL" Stack</a>

- Node.js
- Next.js
- MONGODB
- MONGOOSE
- TypeScript
- TailwindCSS
- Shadcn
- react-hot-toast
- js-sha256

## <a name="features">🔋 Функций</a>

👉👉 **Аутентификация с Clerk:** Управление пользователями через Clerk, обеспечивая безопасную и эффективную аутентификацию.

👉👉 **Наличие базы данных для
регистрации и авторизации** Все зарегистрированные пользователи храняться в MONGODB с MONGOOSE (объектное моделирование MongoDB для Node.js.) используется полноценная база данных SQL с запросами

```bash
##Кэшированное подключение к MONGODB
export const connectToDatabase = async() =>{
   
    if(cached.conn) return cached.conn
    if(!MONGODB_URL) throw new Error("MongoDB url is missing")

    cached.promise = cached.promise || mongoose.connect(
        MONGODB_URL,{
            dbName: "Stepswithashield",
            bufferCommands: false
        }
    )
    cached.conn = await cached.promise
    return cached.conn

}
```
👉👉 **ШИФРОВАНИЯ текста** три вида шифрования

👉👉 **Генерация паролей**  Разные свойства для генерации
пароля (длина пароля,
добавления цифр, символы и тд.
как в примере)

👉👉 **Модальные окна** есть 2 или более модальных окон

👉👉 **checkbox** В формах используются
чекбоксы для выбора свойств
генерации пароля

👉👉 **Совместимость**   Совместим со всеми актуальными ОС версиями ОС

👉👉 **Актуальная полезная информация** 

👉👉 **Оптимизация (скорость работы)**  Полная оптимизация
