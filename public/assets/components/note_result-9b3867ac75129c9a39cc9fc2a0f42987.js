var NoteResult=React.createClass({displayName:"NoteResult",getInitialState:function(){return{notes:[],categories:[],editModal:!1}},componentDidMount:function(){this.getInitialNotes(),$(ReactDOM.findDOMNode(this)).on("hidden.bs.modal",this.onModalHidden)},componentWillUnmount:function(){$(ReactDOM.findDOMNode(this)).off("hidden.bs.modal",this.onModalHidden)},onModalHidden:function(){this.setState({editModal:!1})},handleModalEdit:function(t){this.setState({editModal:t})},getInitialNotes:function(){$.ajax({url:"notes.json",type:"GET",dataType:"json",success:function(t){this.isMounted()&&this.setState(t)}.bind(this)})},handleNoteSubmit:function(t,e,n){$.ajax({data:t,url:e,type:n,dataType:"json",success:function(t){this.setState(t)}.bind(this)})},onModalLoaded:function(t,e,n){var a=$(ReactDOM.findDOMNode(t)),i=a.attr("id");n?(this.generateAlloyEditor(i),this.typeAhead(e)):CKEDITOR.instances[i].destroy()},generateAlloyEditor:function(t){AlloyEditor.editable(t,{toolbars:{styles:{selections:[{name:"link",buttons:["linkEdit"],test:AlloyEditor.SelectionTest.link},{name:"text",buttons:["code","bold","italic","quote","removeFormat","strike","underline"],test:AlloyEditor.SelectionTest.text}]}}})},substringMatcher:function(t){return function(e,n){var a;a=[],substrRegex=new RegExp(e,"i"),$.each(t,function(t,e){substrRegex.test(e)&&a.push(e)}),n(a)}},typeAhead:function(t){var e=this.props.categories,n=[];$.each(e,function(t,e){n.push(e.name)}),$(t).typeahead({minLength:1,highlight:!0,classNames:{input:"typeahead-input",hint:"typeahead-hint",selectable:"typeahead-selectable"}},{name:"categories",source:this.substringMatcher(n)})},render:function(){return React.createElement("div",{className:"note-results"},React.createElement("div",{className:"search-form-wrapper"},React.createElement(NoteSearchForm,{handleNoteSubmit:this.handleNoteSubmit,categories:this.state.categories})),React.createElement("div",{className:"note-listing-wrapper"},React.createElement(NoteListing,{notes:this.state.notes,handleNoteSubmit:this.handleNoteSubmit,editModal:this.state.editModal,handleModalEdit:this.handleModalEdit,onModalLoaded:this.onModalLoaded})))}});