import axios from "axios";  // 3) AXIOS import etmemisdik.

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
         sortedPosts(state) {
            // 1) Burda seperator operatorunu yazmagi unutmusduq
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
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
        // 4)
        removePost(state, post) {
            state.posts = state.posts.filter(p => p.id !== post.id);
        },
    },
    actions: {
        async fetchPosts({state, commit}) {
            try{
                commit('setLoading', true) 
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                         _page: state.page, 
                        _limit: state.limit 
                    }
                });
                commit('setTotalPages', Math.ceil( response.headers['x-total-count'] / state.limit ))
                commit('setPosts', response.data)  
            }catch(e){
                console.log('error');
            } finally{
                commit('setLoading', false) 
            }
        },
        async loadMorePosts({state, commit}) {
            try{
                commit('setPage', state.page + 1);

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                         _page: state.page,
                        _limit: state.limit 
                    }
                });
                commit('setTotalPages', Math.ceil( response.headers['x-total-count'] / state.limit ) )  
                commit('setPosts', [...state.posts, ...response.data])  // 2) Burda da 'this' evezine 'state' yazmaq lazim idi. 
            }catch(e){
                console.log('error');
            } 
        }
    },
    namespaced: true
}