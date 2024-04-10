// 1) Composition API ile tetbiqi yaratsaydiq onda nece edecekdik? Tetbiqin, funskionalligini emele getiren her ferqli hissesini ayri
// bir fayl icinde yerlesdire bilerdik. Meselen: Options API formatinda tetbiqi yigdiqda butun kodlar script tag-lerinin icinde bir faylda idi.

// 2) 'usePosts.js' faylina yerlesdirdiyimiz kodlar sırf, postlarin yuklenmesi ile baglidir. 

import axios from "axios";
import {ref, onMounted} from 'vue';

// 3) Bu fayldan export etdiyimiz 'usePosts()' adlı funksiyani komponent (PostPageCompositionApi) icinde import etdikden sonra cagiraraq istifade edeceyik.
export function usePosts(limit) {

    // 4) Postlarin yuklenmesinde istifade edilen deyiskenleride ayrica bu emeliyyati icra eden funksiyanin yerlesdiyi faylda yaziriq.
    const posts = ref([])
    const totalPages = ref(0)
    const isPostsLoading = ref(true)

    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: 1,   
                    _limit: limit
                }
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = response.data;
        } catch (e) {
            alert('Ошибка')
        } finally {
            isPostsLoading.value = false;
        }
    }

    // 5) onMounted() metodu Options API-de istifade etdiyimiz mounted() ile eyni isi gorur.
    onMounted(fetching)

    return {
        posts, isPostsLoading, totalPages
    }
}