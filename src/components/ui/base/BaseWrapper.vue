<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <h2 class="subtitle">{{ title }}</h2>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 72px;
}
.wrapper {
  width: 100%;
  margin: 0 auto;
}
.steps {
  .wrapper {
    max-width: 908px;
  }
}
.ways {
  .wrapper {
    box-shadow: 0px 232px 93px rgba(205, 207, 210, 0.01),
      0px 131px 78px rgba(205, 207, 210, 0.05),
      0px 58px 58px rgba(205, 207, 210, 0.09),
      0px 15px 30px rgba(180, 185, 204, 0.08),
      0px 0px 0px rgba(135, 135, 135, 0.42);
    border-radius: 10px;
    padding: 38px 48px 74px 48px;
  }
}
.about {
  .wrapper {
    max-width: 824px;
  }
<<<<<<< HEAD
  .about {
    .wrapper {
      max-width: 824px;
    }
  }
  .offers {
    .wrapper {
      max-width: 898px;
    }
  }
  .reviews {
    .wrapper {
      max-width: 928px;
    }
  }
  .questions {
    .wrapper {
      max-width: 1084px;
    }
  }
  .help {
    .wrapper {
      max-width: 1206px;
    }
  }
  .contacts {
    .wrapper {
      max-width: 1102px;
    }
  }
=======
}
.plans {
  .wrapper {
    max-width: 898px;
  }
}
>>>>>>> ec5caa1ac826e10c1c98da5896f0216235562adb
</style>
