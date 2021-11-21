<template>
  <section class="content">
    <div class="container-fluid">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
            <BarChart :data="barChartData" :options="barChartOptions" :height="100" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from "~/components/BarChart.vue";

export default {
  layout: "dashboardLayout",
  name: "MessagerieEcole",
  components: { BarChart },
  data() {
    return {
      barChartData: {
        labels: [
          "2019-06",
          "2019-07",
          "2019-08",
          "2019-09",
          "2019-10",
          "2019-11",
          "2019-12",
          "2020-01",
          "2020-02",
          "2020-03",
        ],
        datasets: [
          {
            label: "Visualizaciones",
            data: [2, 1, 16, 3, 4, 5, 0, 0, 4, 12, 2],
            backgroundColor: "rgba(20, 255, 0, 0.3)",
            borderColor: "rgba(100, 255, 0, 1)",
            borderWidth: 2,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Google analytics data",
          fontSize: 24,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 7,
                min: 0,
                stepSize: 1,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
    };
  },
  head: {
    title: "Messagerie - UniversCitiz",
    links: [
      {
        href: "/dashbord_assets/css/style.css",
        rel: "stylesheets",
      },
    ],
    scripts: [
      {
        src: "/dashbord_assets/js/pages/apps/chat.js",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
</style>