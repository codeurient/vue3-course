export const postModule = {
    // 1) STATE-i funksiya kimi yaratmaq daha meslehetdir. 
    state: () => ({
        posts: [],
        // 2) Burda sirf Postlar ile bagli kodlarimizi istifade edeceyimiz ucun PopUp Modal pencere ucun olan hisseni silirik:   dialogVisible: false,
        isPostLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,  // 9) limit deyismeyeceyi ucun ona MUTATIONS yazmaga ehtiyac yoxdur. 
        totalPages: 0,
        sortOptions: [ // 10) sortOptions deyismeyeceyi ucun ona MUTATIONS yazmaga ehtiyac yoxdur. 
            {value: 'title', name: 'By title'},
            {value: 'body',  name: 'By body'}
        ]
    }),
    getters: {
        
    },
    mutations: {
        // 3) STATE parametri STATE funksiyasinin icindeki butun xasselerdir. POSTS parametri ise hemin funksiyani cagirdigimizda vereceyimiz
        // arqumentdir. NOT: STATE.POSTS yazdiqda burda olan POSTS sozu parametr deyildir, STATE funksiyasi icinde olan POSTS xassesidir. 
        // Hemin xasseni cagiraraq parametr olan POSTS-un aldigi deyeri yerlesdiririk. Yəni XASSƏ-nin dəyəri, PARAMETR-dən gələn dəyərdir. 
        setPosts(state, posts) {
            console.log(state, posts);
            state.posts = posts;
        },
        // 4) isPostLoading xassesine deyer teyin edirik
        setLoading(state, bool)              {   state.isPostLoading = bool;          },

        // 5) page xassesine deyer teyin edirik
        setPage(state, page)                 {   state.page = page;                   },

        // 6) selectedSort xassesine deyer teyin edirik
        setSelectedSort(state, selectedSort) {   state.selectedSort = selectedSort;   },

        // 7) totalPages xassesine deyer teyin edirik
        setTotalPages(state, totalPages)     {   state.totalPages = totalPages;       },

        // 8) searchQuery xassesine deyer teyin edirik
        setSearchQuery(state, searchQuery)   {   state.searchQuery = searchQuery;     },
    },
    actions: {

    }
}