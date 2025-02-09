<template>
  <Dialog
    :model-value="view"
    @update:model-value="$emit('update:view', $event)"
    @close-dialog="$emit('close-dialog')"
  >
    <!-- アラート -->
    <template v-slot:alert>
      <Alert v-if="isViewAlert" @end-alert="isViewAlert = false">
        訪問リストに追加しました
      </Alert>
    </template>
    <!-- サブタイトル -->
    <template v-slot:sub-title>
      <span
        :class="eventData.eventType == '限定プログラム' ? 'pink' : 'purple'"
      >
        {{ eventData.eventType }}
      </span>
    </template>
    <!-- タイトル -->
    <template v-slot:title>
      <span v-if="eventData.subTitle">{{ eventData.subTitle }}<br /></span>
      {{ eventData.title }}
    </template>
    <!-- イベント情報 -->
    <template v-slot:info>
      <DialogInfo v-if="eventTime" clockIcon>
        <template v-slot:item>
          {{ eventTime }}
        </template>
      </DialogInfo>
      <DialogInfo mapIcon>
        <template v-slot:item>
          {{ eventData.place }}
        </template>
      </DialogInfo>
      <!-- 学科説明会が3学科全て同じ時間に開催につき追加 -->
      <template v-if="!eventKey.includes('limitedEvent_0')">
        <DialogInfo v-if="eventData.peopleNum" peopleIcon>
          <template v-slot:item>
            {{ eventData.peopleNum }}
          </template>
        </DialogInfo>
      </template>
    </template>

    <!-- 本文 -->
    <template v-slot:body>
      <!-- 学科説明会が3学科全て同じ時間に開催につき追加 -->
      <template v-if="eventKey.includes('limitedEvent_0')">
        <p>{{ eventData.info }}</p>
        <div class="pt-4">
          <template v-for="button in eventData.buttons">
            <template v-if="button.name == 'default'">
              <Button @click="openMap(button.key)">地図を確認</Button>
            </template>
          </template>
        </div>
        <template v-for="value in this.departmentSessionEventsKey">
          <TimeScheduleDialogForDepartmentSession
            :eventData="this.limitedEventsData[value]"
            :eventDetailKey="value"
            :eventKey="this.eventKey"
            @isMyNoteBtnClicked="this.isViewAlert = true"
          />
        </template>
      </template>
      <template v-else>
        <p>{{ eventData.info }}</p>
        <div :class="{ 'mt-2': eventData.links.length != 0 }">
          <a
            v-for="linkData in eventData.links"
            style="font-size: 0.9em; display: block; margin-bottom: 0.4em"
            :href="linkData['url']"
          >
            {{ linkData["name"] }}
          </a>
        </div>
      </template>
    </template>
    <!-- フッター -->
    <template v-slot:footer>
      <template v-if="eventKey.includes('limitedEvent_0')"> </template>
      <template v-else>
        <div class="button-group">
          <template v-for="button in eventData.buttons">
            <template v-if="button.name == 'default'">
              <Button @click="openMap(button.key)">地図を確認</Button>
            </template>
            <template v-else-if="button.name == 'mynote'">
              <Button myNote @click="myNoteBtnClicked">訪問リストに追加</Button>
            </template>
            <template v-else-if="button.name == 'pink'">
              <Button pink :to="'/labs'">研究室を確認</Button>
            </template>
          </template>
        </div>
      </template>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "../parts/Dialog.vue";
import DialogInfo from "../parts/DialogInfo.vue";
import Button from "../parts/Button.vue";
import Alert from "../parts/Alert.vue";
import TimeScheduleDialogForDepartmentSession from "./TimeScheduleDialogForDepartmentSession.vue";
export default {
  name: "TimeScheduleDialog",
  props: {
    eventData: {
      type: [Object, Function],
    },
    eventKey: {
      type: [String, Function],
    },
    eventTime: {
      type: [String, Function],
    },
    view: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close-dialog", "open-map", "update:view"],
  data() {
    return {
      isViewAlert: false,
      type: "events",
      limitedEventsData: {},
      //学科説明会が3学科全て同じ時間に開催につき追加
      departmentSessionEventsKey: [
        "limitedEvent_1",
        "limitedEvent_2",
        "limitedEvent_3",
      ],
    };
  },
  components: {
    Dialog,
    DialogInfo,
    Button,
    Alert,
    TimeScheduleDialogForDepartmentSession,
  },
  methods: {
    myNoteBtnClicked() {
      this.isViewAlert = true;
      let addTitle = "";
      if (this.eventData.subTitle == null) {
        addTitle = this.eventData.title;
      } else {
        addTitle = this.eventData.subTitle + " " + this.eventData.title;
      }
      this.$store.commit("addMyNote", {
        type: this.type,
        key: this.eventKey,
        title: addTitle,
      });
    },
    openMap(key) {
      this.$emit("open-map", key);
    },
  },
  watch: {
    view(newValue) {
      this.$emit("update:view", newValue);
    },
  },
  mounted() {
    this.limitedEventsData =
      this.$store.getters["eventsStore/getLimitedEvents"];
  },
};
</script>
