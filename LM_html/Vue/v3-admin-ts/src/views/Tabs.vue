<template>
  <div class="container">
    <!-- v-model 绑定message 下面通过ref设置默认值为first 将会直接显示未读消息（这是因为下面写了if判断语句中，当message为second时，会显示已读消息等等） -->
		<el-tabs v-model="message" type="border-card" >
			<el-tab-pane :label="`未读消息(${state.unread.length})`" name="first">
        <!-- :data="state.unread" 表示将表格的数据源绑定到 Vue 实例中 state 对象的 unread 属性上。这意味着表格将显示 state.unread 中的数据。 -->
				<el-table :data="state.unread" :show-header="false" style="width: 100%" highlight-current-row >
					<el-table-column>
						<template #default="scope">
							<span class="message-title">{{ scope.row.title }}</span>
						</template>
					</el-table-column>
					<el-table-column prop="date" width="180"></el-table-column>
					<el-table-column width="120">
						<template #default="scope">
							<el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="handle-row">
					<el-button type="primary" @click="handleReadAll(state.unread.length)">全部标为已读</el-button>
				</div>
			</el-tab-pane>
			<el-tab-pane :label="`已读消息(${state.read.length})`" name="second">
				<template v-if="message === 'second'">
					<el-table :data="state.read" :show-header="false" style="width: 100%" highlight-current-row>
						<el-table-column>
							<template #default="scope">
								<span class="message-title">{{ scope.row.title }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="date" width="180"></el-table-column>
						<el-table-column width="120">
							<template #default="scope">
								<el-button type="danger" size="small" @click="handleDel(scope.$index)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
					<div class="handle-row">
						<el-button type="danger" @click="handleDelAll(state.read.length)">删除全部</el-button>
					</div>
				</template>
			</el-tab-pane>
			<el-tab-pane :label="`回收站(${state.recycle.length})`" name="third">
				<template v-if="message === 'third'">
					<el-table :data="state.recycle" :show-header="false" style="width: 100%" highlight-current-row>
						<el-table-column>
							<template #default="scope">
								<span class="message-title">{{ scope.row.title }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="date" width="180"></el-table-column>
						<el-table-column width="120">
							<template #default="scope">
								<el-button size="small" @click="handleRestore(scope.$index)">还原</el-button>
							</template>
						</el-table-column>
					</el-table>
					<div class="handle-row">
						<el-button type="danger" @click="handleRestoreAll()">清空回收站</el-button>
					</div>
				</template>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive,onMounted } from 'vue';
import { eventBus } from '../store/EventBus';
// import type { TabsPaneContext } from 'element-plus'   // type 为TS关键词 指类型为什么什么

const message = ref('first');
const state = reactive({
	unread: [
		{
			date: '2024-01-06 20:00:00',
			title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
		},
		{
      "date": "2024-01-07 12:30:00",
      "title": "【紧急通知】数据库服务器将于明天上午进行紧急维护"
    },
		{
    "date": "2024-01-08 08:45:00",
    "title": "【重要通告】新功能发布预告：明天下午将推出用户权限管理模块"
    },
    {
    "date": "2024-01-09 15:20:00",
    "title": "【系统更新】最新版本已发布,请尽快升级至V2.0"
    },
    {
    "date": "2024-01-10 09:10:00",
    "title": "【通知】服务器维护计划：下周末将进行硬件升级"
    },
    {
    "date": "2024-01-11 18:30:00",
    "title": "【提醒】请及时备份重要数据，系统将于明天进行日常数据清理"
    },
    {
    "date": "2024-01-12 11:45:00",
    "title": "【紧急通知】应用服务中断通知：正在紧急修复中"
    },
    {
    "date": "2024-01-13 14:00:00",
    "title": "【重要通知】系统日志更新：请查看最新的操作记录"
    },
    {
    "date": "2024-01-14 07:55:00",
    "title": "【系统升级】预计下周进行数据库升级，请注意备份重要数据"
    },
    {
    "date": "2024-01-15 22:30:00",
    "title": "【通告】系统将于本周五晚上进行例行性维护"
    }
	],
	read: [
		{
			date: '2018-04-19 20:00:00',
			title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
		}
	],
	recycle: [
		{
			date: '2018-04-19 20:00:00',
			title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
		}
	]
});

// 将unread中的数据传递给Header.vue组件，方便右上角决定是否有消息的展示
onMounted(()=>{
  eventBus.emit('unreadLen', state.unread.length);
})

const handleRead = (index: number) => {
	const item = state.unread.splice(index, 1);
	state.read = item.concat(state.read);
  eventBus.emit('unreadLen', state.unread.length);
  // console.log(state.unread.length);
  
};
const handleDel = (index: number) => {
	const item = state.read.splice(index, 1);
	state.recycle = item.concat(state.recycle);
};
const handleRestore = (index: number) => {
	const item = state.recycle.splice(index, 1);
	state.read = item.concat(state.read);
};


// 删除全部操作
const handleReadAll = function (len:number){
  const items = state.unread.splice(0, len);
	state.read = items.concat(state.read);
  eventBus.emit('unreadLen', state.unread.length);
  // console.log(state.unread.length);
};

const handleDelAll = function (len:number){
  const items = state.read.splice(0, len);
	state.recycle = items.concat(state.recycle);
};

const handleRestoreAll = () =>{
  state.recycle = [];
}
// tab 点击的标签的上下文信息  event:点击这个事件的信息 TabPaneContext:这个标签的上下文信息 ,下面函数是用来debug的
// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)
// }
</script>

<style scoped>
.message-title {
	cursor: pointer;
}
.handle-row {
	margin-top: 30px;
}
</style>