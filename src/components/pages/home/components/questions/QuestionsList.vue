<template>
  <div class="items">
    <question-item v-for="(question, index) in questions" :key="question.title" :question="question" :index="index" @toggleOpen="toggleOpen"></question-item>
  </div>
</template>

<script>
  import QuestionItem from "@/components/pages/home/components/questions/QuestionItem";
  export default {
    components: {QuestionItem},
    data() {
      return {
        questions: [
          {
            title: 'Условия выдачи займа',
            description: `
            <span>Чтобы получить деньги, нужно совершить несколько простых действий</span>
            <ol>
                <li>
                    Зарегистрируйтесь на сайте проекта: для этого нужно нажать кнопку «Получить деньги».
                </li>
                <li>
                    Заполните анкету с необходимыми данными (понадобится паспорт).
                </li>
                <li>
                    Введите данные банковской карты и активируйте сервис.
                </li>
                <li>
                    Выберите самое интересное предложение и оформите займ. После короткого рассмотрения заявки на карту поступит зачисление.
                </li>
            </ol>`,
            active: false,
          },
          {
            title: 'Как долго рассматривается заявка?',
            description: `
             <ol>
                <li>
                    Часто обстоятельства складываются так, что деньги нужны здесь и сейчас. Мы понимаем это и относимся к вашему времени, как к своему: чтобы вы могли получить займ в любой момент, работаем 24/7.
                </li>
                <li>
                    Чтобы заполнить анкету, вам потребуется около 3 минут, рассмотрение заявки займет еще 5 минут, — и по истечении этого срока вы получите деньги удобным способом.
                </li>
            </ol>
            `,
            active: false,
          },
          {
            title: 'Если я не успеваю вернуть займ?',
            description: `
             <ol>
                <li>
                    Согласуйте рефинансирование вашего займа. Вам предложат погасить сумму на более лояльных условиях, которые помогут избежать больших штрафов за просрочку платежа.
                </li>
            </ol>
            `,
            active: false,
          },
        ]
      };
    },
    methods: {
      toggleOpen(index) {
        this.questions = this.questions.map((ques, i) => {
          if(index === i) {
            ques.active = !ques.active;
          } else {
            ques.active = false;
          }
          return ques;
        });
      }
    }
  }
</script>
