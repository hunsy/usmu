<template>
  <div id="toPay">
    <div class="weui-form-preview">
      <div class="weui-form-preview__hd">
        <div class="weui-form-preview__item">
          <label class="weui-form-preview__label">订单明细</label>
          <em class="weui-form-preview__value">{{total}}</em>
        </div>
      </div>
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item" v-for="good in cartGoods" :key="good.id">
          <label class="weui-form-preview__label">{{good.name}}</label>
          <div class="weui-form-preview__value">
            <span class="price__detail">{{good.count}}&nbsp;x&nbsp;{{good.price}}</span>
            <span class="item_total">{{good.count * good.price}}</span>
          </div>
        </div>
      </div>
      <div class="weui-form-preview__ft">
        <a class="weui-form-preview__btn weui-form-preview__btn_primary" @click="pay()">支付</a>
      </div>
    </div>
  </div>
</template>

<script>
import { pay } from "@/api/pay";
export default {
  name: "toPay",
  data() {
    return {
      cartGoods: [],
      goodIds: []
    };
  },
  mounted() {
    const params = this.$route.params;
    this.cartGoods = params;
    console.log(params);
  },
  computed: {
    total: function() {
      let total = 0;
      this.cartGoods.forEach((item, idx, arr) => {
        total += item.price * item.count;
        this.goodIds.push(item.id);
      });
      console.log("goodIds", this.goodIds);

      return total;
    }
  },
  methods: {
    async pay() {
      const data = await pay({ goodIds: this.goodIds }).catch(e => {});
      console.log("data", data);

      if (data) {
      }
    }
  }
};
</script>

<style type="text/css">
.price__detail {
  padding: 0 15px;
  color: deepskyblue;
  font-size: 12px;
}

.item__total {
  padding: 015px;
  color: #fff;
  font-size: 14px;
}
</style>
