const authKey = '20005149-bc71a0b9546335ae16bac5ccc'
export default {
    searchReq: "",
    page: 1,
    resultLength:'12',
    imgSearching() {    
        const requestUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchReq}&page=${this.page}&per_page=${this.resultLength}&key=${authKey}`
        return fetch(requestUrl).then(resp => resp.json()).then(data => { 
            this.page += 1;
            return data;
        })  
    } ,
    resetPage() { 
        this.page = 1;
    },
    get query() { return this.searchReq },
    set query(value) { this.searchReq=value}
}