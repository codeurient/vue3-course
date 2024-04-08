export const postModule = {
    state: () => ({
        posts: [],
        isPostLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,  
        totalPages: 0,
        sortOptions: [ 
            {value: 'title', name: 'By title'},
            {value: 'body',  name: 'By body'}
        ]
    }),
    getters: {
         sortedPosts(state) { // 1) 'this' acar sozleri 'state' ile evez ederek yuxarida olan 'STATE'-deki datalari elde edirik.
            return [state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
        },
        sortedAndSearchedPosts(state, getters) {
            // 2) Ikinci parametrde yazdigimiz 'getters' VUEX-in oz daxili kodudur hansi ki, GETTERS sahesine muraciet etmek ucun lazimdir. Bizde hemin parametrden
            // 'GETTERS' icinde olan sortedPosts() funksiyasini cagirmaq ucun istifade etmisik. 
            return getters.sortedPosts.filter(post => post.title.includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
            console.log(state, posts);
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostLoading = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    // 3) ACTIONS-lar parametr olaraq OBJECT qebul edir ve hemin object icinde olan saheler bunlardir: state, rootState, commit, dispatch, getters, rootGetters
    // Daha etrafli saytda: https://vuex.vuejs.org/api/#actions     
    // dispatch-i qeyd edim ki, sadece ne ucun istifade edilir: Basqa ACTION-lari cagirmaq ucun.
    actions: {
        async fetchPosts({state, commit}) {
            try{
                commit('setLoading', true) // 4) 
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                         _page: state.page, // 6)
                        _limit: state.limit // 7)
                    }
                });
                commit('setTotalPages', Math.ceil( response.headers['x-total-count'] / state.limit )) // 8) 
                commit('setPosts', response.data)   // 9) 
            }catch(e){
                console.log('error');
            } finally{
                commit('setLoading', false) // 5) 
            }
        },
        async loadMorePosts({state, commit}) { // 10) 
            try{
                commit('setPage', state.page + 1); // 11) 

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                         _page: state.page, // 12) 
                        _limit: state.limit // 13) 
                    }
                });
                commit('setTotalPages', Math.ceil( response.headers['x-total-count'] / state.limit ) )  // 14) 
                commit('setPosts', [...this.posts, ...response.data])   // 15)  
            }catch(e){
                console.log('error');
            } 
        }
    },
    // 16) Proyekt boyudukce MUTATION-lar coxaldiqca bezi MUTATION-lar eyni adlara sahib ola biler. Hemin adlari qarisdirmamaq ucun MUTATION-larin evvelinde, MODULUN adını yazmaq lazımdır. 
    // Həmin modul adını istifadə ede bilmek ucun 'NAMESPACED' deyilen bir parametr elave ederek TRUE deyerini vermeliyik. Artiq bele yaza bilerik:   {{ $store.commit('post/setLoading') }}
    namespaced: true
}