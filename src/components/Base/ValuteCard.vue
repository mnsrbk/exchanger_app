<template>
  <tr class="valute-card-wrapper">
    <template v-if="!reverse">
      <td class="w-100"><span class="text-right">{{ valute['Nominal'] }}</span></td>
      <td class="w-100"><span>{{ code }}</span></td>
      <td class="w-100"> - </td>
      <td class="w-100"><span :class="vState" ><Component class="icon" :is="vState === 'increase' ? 'IconArrowUp' : 'IconArrowDown'" />{{ valute['Value'] }}</span></td>
      <td class="w-100"><span>RUB</span></td>
    </template>
    <template v-else>
      <td class="w-100"><span class="text-right">1</span></td>
      <td class="w-100"><span>RUB</span></td>
      <td class="w-100"> - </td>
      <td class="w-100"><span :class="vState" ><Component class="icon" :is="vState === 'increase' ? 'IconArrowUp' : 'IconArrowDown'" />{{ (valute['Nominal']/valute['Value']).toFixed(4) }}</span></td>
      <td class="w-100"><span>{{ code }}</span></td>
    </template>
    <td class="w-100"><span class="text-center" :class="vState"><template v-if="vState === 'increase'">+</template>{{ diff }}%</span></td>
    <td class="w-100"><app-button :class="{ reverse }" :isActive="reverse" @click="change"><IconArrowLeftRight /></app-button></td>
    <td class="valute-name">{{ `(${valute['Name']})` }}</td>
  </tr>
</template>

<script>
import { ref, computed } from 'vue'
import IconArrowLeftRight from '../icons/IconArrowLeftRight.vue'
import IconArrowDown from '../icons/IconArrowDown.vue'
import IconArrowUp from '../icons/IconArrowUp.vue'
export default {
  name: 'ValuteCard',
  components: { IconArrowLeftRight, IconArrowDown, IconArrowUp },
  props: ['code', 'valute'],
  setup (props) {
    const reverse = ref(false)
    const vState = computed(function () {
      return props.valute['Value'] > props.valute['Previous'] ? 'decrease' : 'increase'
    })
    const diff = computed(() => (((props.valute['Value']-props.valute['Previous'])*-100)/props.valute['Previous']).toFixed(2))
    function change () { reverse.value = !reverse.value }

    return { reverse, vState, diff, change }
  }
}
</script>

<style scoped>
.valute-card-wrapper {
  padding: 5px 0px;
}
span {
  font-weight: 600;
}
span.decrease {
  color: red;
  /* padding: 2px 6px;
  color: white;
  border-radius: 4px; */
}
span.increase {
  color: green;
  /* padding: 2px 6px;
  color: white;
  border-radius: 4px; */
}
.text-right {
  display: block;
  padding-right: 5px;
  width: 100%;
  text-align: right;
}
.text-center {
  display: block;
  width: 100%;
  text-align: center;
}
td {
  padding: 1px 3px;
}
.w-100 {
  width: 100px;
}
.icon {
  padding-top: 3px;
}
@media screen and (max-width: 700px) {
  .valute-name {
    display: none;
  }
}
</style>