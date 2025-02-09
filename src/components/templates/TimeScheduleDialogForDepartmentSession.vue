<!-- 学科説明会が3学科全て同じ時間に開催につき，一つのdialogにまとめるため追加 -->
<template>
  <div class="mt-8">
    <div class="pb-2">
      <h4 class="">{{ eventData.faculty }}</h4>
      <h2>{{ eventData.subTitle }}</h2>
    </div>
    <div class="dialog-info pb-2">
      <DialogInfo mapIcon>
        {{ eventData.place }}
      </DialogInfo>
      <DialogInfo v-if="eventData.peopleNum" peopleIcon>
        {{ eventData.peopleNum }}
      </DialogInfo>
    </div>
    <div class="pb-2">
      <a
        v-for="linkData in eventData.links"
        style="font-size: 0.9em; display: block; margin-bottom: 0.4em"
        :href="linkData['url']"
      >
        {{ linkData["name"] }}
      </a>
    </div>
    <Button myNote @click="myNoteBtnClicked">訪問リストに追加</Button>
  </div>
</template>

<script>
import DialogInfo from "../parts/DialogInfo.vue";
import Button from "../parts/Button.vue";
export default {
  name: "TimeScheduleDialogForDepartmentSession",
  props: {
    eventData: {
      type: [Object, Function],
    },
    eventDetailKey: {
      type: String,
    },
    eventKey: {
      type: String,
    },
  },
  components: {
    DialogInfo,
    Button,
  },
  methods: {
    myNoteBtnClicked() {
      this.$emit("isMyNoteBtnClicked");
      let eventKeySplit = String(this.eventKey).split("_");
      this.$store.commit("addMyNote", {
        type: "events",
        key:
          this.eventDetailKey + "_" + eventKeySplit[2] + "_" + eventKeySplit[3],
        title: this.eventData.subTitle + " " + this.eventData.title,
      });
    },
  },
  mounted() {
    this.limitedEventsData =
      this.$store.getters["eventsStore/getLimitedEvents"];
  },
};
</script>
