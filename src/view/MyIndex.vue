<template>
  <div id="myIndex" class="page">
    <div class="page__bd page__bd_spacing">
      <div class="index__hd"></div>

      <div class="weui-flex">
        <div class="index__left">
          <div
            class="index__left_item"
            :class="{'active':g == currentGird}"
            v-for="(g,index) in girds"
            :key="index"
            @click="changeGird(g)"
          >{{g}}层</div>
        </div>
        <div class="weui-flex__item">
          <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd" style="text-align:left;">{{currentGird}}&nbsp;层</div>
            <div class="weui-panel__bd">
              <div
                class="weui-media-box weui-media-box_appmsg"
                v-for="good in goods"
                :key="good.goodsId"
              >
                <div class="weui-media-box__hd">
                  <img
                    class="weui-media-box__thumb"
                    :src="good.headImgUrl | patchImgHttp"
                    v-if="good.headImgUrl"
                  >
                  <img
                    class="weui-media-box__thumb"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
                    alt
                    v-else
                  >
                </div>
                <div class="weui-media-box__bd">
                  <h4 class="weui-media-box__title" style="text-align:left;">{{good.goodsName}}</h4>
                  <p class="weui-media-box__desc">{{good.goodsPrice}}</p>
                </div>

                <div class="weui-media-box__ft">
                  <a @click="addCart(good)" class="weui-btn weui-btn_mini weui-btn_primary">+</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index__ft">
        <div class="weui-panel">
          <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_small-appmsg">
              <div class="weui-cells">
                <div
                  class="weui-cell weui-cell_access"
                  v-for="cartItem in cartGoods"
                  :key="cartItem.id"
                >
                  <div class="weui-cell__hd">
                    <!--                     <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                      alt
                      style="width:20px;margin-right:5px;display:block"
                    >-->
                    <img
                      src="cartItem.headImgUrl|patchImgHttp"
                      alt
                      style="width:20px;margin-right:5px;display:block"
                    >
                  </div>
                  <div class="weui-cell__bd" style="text-align:left;">
                    <span style="font-size:12px;">{{cartItem.name}}</span>
                  </div>

                  <div class="weui-cell__bd" style="text-align:left;">
                    <span style="font-size:12px;">{{cartItem.price * cartItem.count}}</span>
                  </div>

                  <div class="weui-cell__hd" style="padding-left:10px;padding-right:10px;">
                    <span class="cart__item_op" @click="add(cartItem,1)">+</span>
                    <span>{{cartItem.count}}</span>
                    <span class="cart__item_op" @click="add(cartItem,-1)">-</span>
                  </div>
                </div>
              </div>
              <div class="weui-cell__hd">
                <a @click="toPay()" class="weui-btn weui-btn_mini weui-btn_primary">确定</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoods } from "@/api/goods";
export default {
  name: "myIndex",
  data() {
    return {
      merchantId: 1,
      productInventoryId: 1,
      girds: [1, 2, 3],
      currentGird: 1,
      goods: [],
      cartGoods: [],
      defaultGoods: {}
    };
  },
  mounted() {
    this.loadGoods();
  },
  methods: {
    async loadGoods() {
      const d = await getGoods({
        merchantId: this.merchantId,
        productInventoryId: this.productInventoryId
      }).catch(e => {
        console.log(e);
      });
      console.log(d);

      if (d) {
        this.defaultGoods = d;
        this.goods = this.defaultGoods[this.currentGird];
      }
    },
    changeGird(g) {
      this.currentGird = g;
      this.goods = this.defaultGoods[this.currentGird];
    },
    addCart(good) {
      if (this.cartGoods.length == 0) {
        this.cartGoods.push({
          id: good.goodsId,
          name: good.goodsName,
          price: good.goodsPrice,
          count: 1
        });
      } else {
        let has = false;
        this.cartGoods.forEach((item, idx, arr) => {
          if (item.id == good.id) {
            item.count += 1;
            has = true;
          }
        });
        if (!has) {
          this.cartGoods.push({
            id: good.goodsId,
            name: good.goodsName,
            price: good.goodsPrice,
            count: 1
          });
        }
      }
    },
    add(it, step) {
      let a = [];
      this.cartGoods.forEach((item, idx, arr) => {
        if (item.id == it.id) {
          if (step < 0 && item.count > 1) {
            item.count += step;
            a.push(item);
          } else if (step > 0) {
            item.count += step;
            a.push(item);
          }
        } else {
          a.push(item);
        }
      });
      this.cartGoods = a;
    },
    toPay() {
      this.$router.push({ name: "toPay", params: this.cartGoods });
    }
  }
};
</script>

<style>
</style>
