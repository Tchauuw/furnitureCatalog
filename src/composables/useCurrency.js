import { computed, ref } from "vue";

export default function useCurrency(parameters) {

    const currency = ref(parameters.currency);

    const format = (value) => {
        return computed(() => `${value} ${currency.value}`);
    }

    return { 
        format, 
        currency,
    }
}