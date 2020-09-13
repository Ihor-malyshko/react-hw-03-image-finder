(this["webpackJsonpreact-hw-03-image-finder"]=this["webpackJsonpreact-hw-03-image-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(65)},47:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),i=a(7),l=a(3),u=a(4),s=a(6),m=a(5),h={maxWidth:1170,marginLeft:"auto",marginRight:"auto",paddingRight:12,paddingLeft:12},g=function(e){var t=e.children;return r.a.createElement("div",{style:h},t)};function p(e){var t=e.message;return r.a.createElement("div",null,t)}var d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleChange})))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.props.items;return r.a.createElement(r.a.Fragment,null,t.map((function(t){var a=t.id,n=t.webformatURL,c=t.tags,o=t.largeImageURL;return r.a.createElement("li",{key:a,className:"ImageGalleryItem"},r.a.createElement("img",{onClick:function(){return e.props.catchLargeImg(o)},key:a,src:n,alt:c,className:"ImageGalleryItem-image"}))})))}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.props.items;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"ImageGallery"},r.a.createElement(f,{items:e,catchLargeImg:this.props.catchLargeImg})))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDoun=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDoun)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDoun)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Overlay"},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:this.props.image,alt:""})))}}]),a}(n.Component);function y(e){var t=e.getMore;return r.a.createElement("button",{type:"button",className:"Button",onClick:t},"Load more")}var E=a(18),S=a.n(E),O=(a(46),a(47),a(19)),j=a.n(O),w="17697395-d82fa808be968b3a5a71f0627",I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return j.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(w,"&image_type=photo&orientation=horizontal&per_page=").concat("6")).then((function(e){return e.data.hits}))},k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,searchQuery:"",page:1,largeImageUrl:null},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),I(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.catchLargeImg=function(t){e.setState({largeImage:t})},e.closeModal=function(){e.setState({largeImage:""})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.error,c=e.largeImage;return r.a.createElement(g,null,r.a.createElement(d,{onSubmit:this.handleSearchFormSubmit}),n&&r.a.createElement(p,{message:"Whoops, something went wrong: ".concat(n.message)}),t.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{items:t,catchLargeImg:this.catchLargeImg})),a&&r.a.createElement(S.a,{type:"TailSpin",color:"#3f51b5",height:100,width:100}),!a&&t.length>0&&r.a.createElement(y,{getMore:this.fetchImages}),c&&r.a.createElement(b,{image:c,onClose:this.closeModal}))}}]),a}(n.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.aa9d3ed6.chunk.js.map