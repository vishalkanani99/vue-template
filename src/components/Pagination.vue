<script setup>
import { mdiChevronRightCircle, mdiChevronLeftCircle } from '@mdi/js'

const props = defineProps({
    limit: {
        type: [String, Number],
        default: 10
    },
    page: {
        type: Number,
        default: 1
    },
    recordsTotal: {
        type: Number,
        default: null
    },
    afterDots: {
        type: Number,
        default: 1
    },
    beforeDots: {
        type: Number,
        default: 1
    },
    color: {
        type: String,
        default: "white",
    },
});

const emit = defineEmits(['onPageUpdate']);

const activePage = ref(props.page)
const limit = computed(() => parseInt(props.limit))

const pagination = computed(() => {
    let paginate = Math.ceil(props.recordsTotal / limit.value)
    return paginate
})

const showingFrom = computed(() => {
    return ( (activePage.value * limit.value) - limit.value) + 1
})

const showingTo = computed(() => {
    if(activePage.value * limit.value >= props.recordsTotal){
        return props.recordsTotal
    }
    return (activePage.value * limit.value)
})

const loadPage = (page) => {
    activePage.value = page
    emit('onPageUpdate', activePage.value)
}

watch(() => props.page, (page) => {
    activePage.value = page
})

onMounted(() => {
})
</script>

<template>
    <div>
		<div class="flex flex-col md:flex-row md:justify-between items-center" v-if="limit">
			<div class="flex items-center flex-wrap justify-start" v-if="pagination > 1">
				<Button v-if="activePage > 1" @click="loadPage(activePage - 1)" :icon="mdiChevronLeftCircle" small class="mr-3 last:mr-0 mb-3" :color="color"/>
                <template  v-for="n in pagination" :key="n">
                    <Button v-if="n === 1" @click="loadPage(n)" :active="activePage == n ? true : false" :label="n" small class="mr-3 last:mr-0 mb-3" :color="color"/>
                    <span v-if="n !== 1 && n !== pagination  && n === (activePage - beforeDots - 1)" class="mr-3 last:mr-0 mb-3">...</span>
                    <Button v-if="(n >= (activePage - beforeDots) && n <= (activePage + afterDots)) && n !== 1 && n !== pagination" @click="loadPage(n)" :active="activePage == n ? true : false" :label="n" small class="mr-3 last:mr-0 mb-3" :color="color"/>
                    <span v-if="n !== 1 && n !== pagination  && n === (activePage + afterDots + 1)" class="mr-3 last:mr-0 mb-3">...</span>
                    <Button v-if="pagination === n" @click="loadPage(n)" :active="activePage == n ? true : false" :label="n" small class="mr-3 last:mr-0 mb-3" :color="color"/>
                </template>
                <Button v-if="activePage < pagination" @click="loadPage(activePage + 1)" :icon="mdiChevronRightCircle" small class="mr-3 last:mr-0 mb-3" :color="color"/>
            </div>
			<small v-if="recordsTotal">
                Showing
                <span class="font-medium">{{showingFrom}}</span>
                to
                <span class="font-medium">{{showingTo}}</span>
                of
                <span class="font-medium">{{recordsTotal}}</span>
                results
            </small>
		</div>
	</div>
</template>