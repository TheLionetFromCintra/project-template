<template>
  <footer class="footer">
<!--      не забыть v-html-->
      <div class="description">
        <div class="container">
          <p>
            Информация, размещенная на данном сайте, носит исключительно справочный характер и собрана из различных открытых источников информации в соответствии с законодательством РФ. Владелец сайта не несет ответственности за вред чести, достоинству и деловой репутации, за ущерб связанный с упущенной выгодой в результате использования Сайта.
          </p>
          <p>Совершая любые действия на сайте, вы даете свое:</p>

          <p>Согласие на обработку персональных данных;</p>
          <p>Согласие на получение рекламных материалов.</p>

          <p> Услуги на проекте оказываются ИП Баранова Вероника Владимировна ИНН 781302408609 ОГРНИП 320784700177339 Оператор персональных данных № 78-20-007098</p>

          <p> По любым вопросам вы можете связаться со специалистами сервиса по электронной почте: support@ryabina.uno</p>

          <p>Сайт предназначен для дееспособных лиц старше 18 лет. Сайт не хранит данные банковских карт Клиентов. Сайт «ryabina.uno» использует куки для предоставления услуг. Условия хранения или доступа к куки Вы можете настроить в своём браузере.</p>

          <p>Уважаемые Клиенты, информируем Вас о том, что при запросе возврата денежных средств при отказе от подписки, возврат производится исключительно на ту же банковскую карту, с которой была произведена оплата. Для возврата денежных средств подайте заявку в службу поддержки или на почту support@ryabina.uno с указанием причины возврата, а также даты и суммы платежа.</p>

          <p>Сайт не является финансовым учреждением, банком или кредитором, не несёт и не может нести ответственность за любые условия или заключенные договоры кредитования с третьими сторонами. **Подписка на услугу обработки заявки является платной и составляет 332 р. за 6 дней, на срок 30 дней. Обработка заявки не гарантирует получение займа</p>
        </div>
      </div>
      <div class="bottom">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <router-link to="/" class="logo img-wrapper d-flex align-items-center justify-content-center">
              <img src="@/assets/images/logo.svg" alt="logo">
            </router-link>
            <div class="wrapper d-flex flex-column align-items-center">
<!--              не забыть replace-->
              <a href="tel:79991111111">+ 7 999 111 11 11</a>
              <a href="mailto:support@mail.ru">support@mail.ru</a>
              <span>Все права защищены</span>
            </div>
            <base-button class="link" link mode="grey" to="/unsubscribe">Отписаться</base-button>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 128px;
  }
  .description {
    padding: 58px 0;
    background-color: #EFF3F9;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.07em;
    &::v-deep p + p {
      margin-top: 32px;
    }
  }
  .bottom {
    padding: 84px 0;
  }
  .logo {
    max-width: 122px;
    height: 74px;
  }
  .wrapper {
    margin-left: 76px;
    a, span {
      display: block;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.07em;
      color: inherit;
    }
    a + a, a + span {
      margin-top: 12px;
    }
  }
  .link {
    padding: 12px;
    min-width: 198px;
  }
</style>
