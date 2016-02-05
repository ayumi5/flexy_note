var CreateModal=React.createClass({displayName:"CreateModal",onNoteCreate:function(e){e.preventDefault();var t="create-content-modal",a=this.refs.title.value.trim(),o=this.refs.category.value.trim(),n=CKEDITOR.instances[t],l=n.getData().trim(),s={note:{title:a,category:o,content:l}};this.props.handleNoteSubmit(s,this.refs.form.action,"POST"),this.refs.title.value="",this.refs.category.value="",n.setData("")},componentDidMount:function(){this.props.onModalLoaded(this.refs.content,this.refs.category,!0)},componentWillUnmount:function(){this.props.onModalLoaded(this.refs.content,this.refs.category,!1)},render:function(){return React.createElement("div",{className:"note-modal modal fade",id:"note-modal-create",ref:"modal"},React.createElement("div",{className:"modal-dialog"},React.createElement("div",{className:"modal-content edit-modal"},React.createElement("div",{className:"modal-header"},React.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},React.createElement("span",{"aria-hidden":"true"},"\xd7")),React.createElement("form",{ref:"form",role:"form",action:"notes",method:"POST",onSubmit:this.onNoteCreate},React.createElement("div",{className:"form-group"},React.createElement("input",{ref:"title",className:"form-control edit-title",placeholder:"Type in title here"}),React.createElement("div",{className:"modal-body"},React.createElement("h3",null,"Category"),React.createElement("input",{ref:"category",className:"form-control edit-category",id:"create-category-modal"}),React.createElement("h3",null,"Text"),React.createElement("textarea",{ref:"content",className:"form-control edit-content",rows:"10",id:"create-content-modal"}))),React.createElement("div",{className:"modal-footer"},React.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),React.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close")))))))}}),EditModal=React.createClass({displayName:"EditModal",onNoteUpdate:function(e){e.preventDefault();var t="content-"+this.props.note.id,a=CKEDITOR.instances[t],o=this.refs.title.value.trim(),n=this.refs.category.value.trim(),l=a.getData().trim(),s={note:{title:o,category:n,content:l}};this.props.handleNoteSubmit(s,this.refs.form.action,"PUT")},componentDidMount:function(){this.props.onModalLoaded(this.refs.content,this.refs.category,!0)},componentWillUnmount:function(){this.props.onModalLoaded(this.refs.content,this.refs.category,!1)},render:function(){if(this.props.note.category)var e=this.props.note.category.name;return React.createElement("div",{className:"modal-content edit-modal"},React.createElement("div",{className:"modal-header"},React.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},React.createElement("span",{"aria-hidden":"true"},"\xd7")),React.createElement("form",{ref:"form",role:"form",action:"notes/"+this.props.note.id||"notes",method:"PUT",onSubmit:this.onNoteUpdate},React.createElement("div",{className:"form-group"},React.createElement("input",{ref:"title",className:"form-control edit-title",defaultValue:this.props.note.title}),React.createElement("div",{className:"modal-body"},React.createElement("h3",null,"Category"),React.createElement("input",{ref:"category",className:"form-control edit-category",defaultValue:e}),React.createElement("h3",null,"Text"),React.createElement("textarea",{ref:"content",className:"form-control edit-content",defaultValue:this.props.note.content,rows:"10",id:"content-"+this.props.note.id}))),React.createElement("div",{className:"modal-footer"},React.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),React.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close")))))}}),NoteBody=React.createClass({displayName:"NoteBody",formatDate:function(e){return date=new Date(e),date.getUTCFullYear()+"/"+(date.getUTCMonth()+1)+"/"+date.getUTCDate()},onNoteDelete:function(e){e.preventDefault();var t="/notes/"+this.props.note.id;this.props.handleNoteSubmit({},t,"Delete")},onModalEdit:function(){this.props.handleModalEdit(!0)},render:function(){this.props.note.id;if(this.props.note.category)var e=this.props.note.category.name;return React.createElement("div",{className:"panel panel-default col-sm-3 listing"},React.createElement("div",{className:"panel-body"},React.createElement("p",{className:"date col-sm-6 col-xs-6"},this.formatDate(this.props.note.updated_at)),React.createElement("span",{className:"action-icons col-sm-6 col-xs-6"},React.createElement("a",{href:"#",onClick:this.onModalEdit,"data-toggle":"modal","data-target":"#note-modal"+this.props.note.id},React.createElement("i",{className:"fa fa-pencil-square-o fa-lg"})),React.createElement("a",{href:"#",onClick:this.onNoteDelete},React.createElement("i",{className:"fa fa-trash fa-lg"}))),React.createElement("div",{className:"note-header cursor-pointer","data-toggle":"modal","data-target":"#note-modal"+this.props.note.id},React.createElement("h3",null,this.props.note.title),React.createElement("h4",null,e),React.createElement("p",{className:"text-fadeout"}))),React.createElement(NoteModal,{note:this.props.note,editModal:this.props.editModal,handleModalEdit:this.props.handleModalEdit,handleNoteSubmit:this.props.handleNoteSubmit,onModalLoaded:this.props.onModalLoaded}))}}),NoteCreateBox=React.createClass({displayName:"NoteCreateBox",render:function(){return React.createElement("div",{className:"note-create-box"},React.createElement("div",{className:"panel panel-default col-sm-3 listing"},React.createElement("div",{className:"panel-body cursor-pointer","data-toggle":"modal","data-target":"#note-modal-create"},React.createElement("div",{className:"create-content"},React.createElement("h3",{className:"create-title"},"Create New Note"),React.createElement("i",{className:"fa fa-sticky-note-o fa-4x"})))),React.createElement("div",null,React.createElement(CreateModal,{handleNoteSubmit:this.props.handleNoteSubmit,onModalLoaded:this.props.onModalLoaded})))}}),NoteListing=React.createClass({displayName:"NoteListing",render:function(){var e=this.props.notes.map(function(e){return e?React.createElement(NoteBody,{note:e,key:e.id,handleNoteSubmit:this.props.handleNoteSubmit,editModal:this.props.editModal,handleModalEdit:this.props.handleModalEdit,onModalLoaded:this.props.onModalLoaded}):void 0}.bind(this));return React.createElement("div",{className:"note-listing col-sm-11 col-sm-offset-1"},e,React.createElement(NoteCreateBox,{handleModalEdit:this.props.handleModalEdit,handleNoteSubmit:this.props.handleNoteSubmit,onModalLoaded:this.props.onModalLoaded}))}}),NoteModal=React.createClass({displayName:"NoteModal",render:function(){var e;return e=this.props.editModal?React.createElement(EditModal,{note:this.props.note,handleNoteSubmit:this.props.handleNoteSubmit,onModalLoaded:this.props.onModalLoaded}):React.createElement(ViewModal,{note:this.props.note,handleModalEdit:this.props.handleModalEdit}),React.createElement("div",null,React.createElement("div",{className:"note-modal modal fade",id:"note-modal"+this.props.note.id,ref:"modal"},React.createElement("div",{className:"modal-dialog"},e)))}}),NoteResult=React.createClass({displayName:"NoteResult",getInitialState:function(){return{notes:[],categories:[],editModal:!1}},componentDidMount:function(){this.getInitialNotes(),$(ReactDOM.findDOMNode(this)).on("hidden.bs.modal",this.onModalHidden)},componentWillUnmount:function(){$(ReactDOM.findDOMNode(this)).off("hidden.bs.modal",this.onModalHidden)},onModalHidden:function(){this.setState({editModal:!1})},handleModalEdit:function(e){this.setState({editModal:e})},getInitialNotes:function(){$.ajax({url:"notes.json",type:"GET",dataType:"json",success:function(e){this.isMounted()&&this.setState(e)}.bind(this)})},handleNoteSubmit:function(e,t,a){$.ajax({data:e,url:t,type:a,dataType:"json",success:function(e){this.setState(e)}.bind(this)})},onModalLoaded:function(e,t,a){var o=$(ReactDOM.findDOMNode(e)),n=o.attr("id");a?(this.generateAlloyEditor(n),this.typeAhead(t)):CKEDITOR.instances[n].destroy()},generateAlloyEditor:function(e){AlloyEditor.editable(e,{toolbars:{styles:{selections:[{name:"link",buttons:["linkEdit"],test:AlloyEditor.SelectionTest.link},{name:"text",buttons:["code","bold","italic","quote","removeFormat","strike","underline"],test:AlloyEditor.SelectionTest.text}]}}})},substringMatcher:function(e){return function(t,a){var o;o=[],substrRegex=new RegExp(t,"i"),$.each(e,function(e,t){substrRegex.test(t)&&o.push(t)}),a(o)}},typeAhead:function(e){var t=this.props.categories,a=[];$.each(t,function(e,t){a.push(t.name)}),$(e).typeahead({minLength:1,highlight:!0,classNames:{input:"typeahead-input",hint:"typeahead-hint",selectable:"typeahead-selectable"}},{name:"categories",source:this.substringMatcher(a)})},render:function(){return React.createElement("div",{className:"note-results"},React.createElement("div",{className:"search-form-wrapper"},React.createElement(NoteSearchForm,{handleNoteSubmit:this.handleNoteSubmit,categories:this.state.categories})),React.createElement("div",{className:"note-listing-wrapper"},React.createElement(NoteListing,{notes:this.state.notes,handleNoteSubmit:this.handleNoteSubmit,editModal:this.state.editModal,handleModalEdit:this.handleModalEdit,onModalLoaded:this.onModalLoaded})))}}),NoteSearchForm=React.createClass({displayName:"NoteSearchForm",handleChange:function(){var e=this.refs.query.value.trim(),t=this.refs.category.value.trim(),a=this.refs.min_date.value.trim(),o=this.refs.max_date.value.trim(),n={note:{query:e,category:t,min_date:a,max_date:o}};this.props.handleNoteSubmit(n,this.refs.form.action,this.refs.form.method)},render:function(){var e=this.props.categories.map(function(e){return React.createElement("option",{key:e.id},e.name)});return React.createElement("form",{ref:"form",className:"note-search-form",role:"form",action:"/notes",method:"get",id:"search-form"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-6 form-group"},React.createElement("div",{className:"query"},React.createElement("input",{type:"text",ref:"query",className:"col-sm-6 form-control",onChange:this.handleChange})),React.createElement("div",{className:"category"},React.createElement("select",{className:"form-control",ref:"category",onChange:this.handleChange},React.createElement("option",null,"All"),e)),React.createElement("div",{className:"note-date form-inline"},React.createElement("div",{className:"input-group date col-sm-4"},React.createElement("input",{type:"text",className:"form-control min-date",ref:"min_date",onSelect:this.handleChange}),React.createElement("span",{className:"input-group-addon"},React.createElement("i",{className:"fa fa-calendar"}))),React.createElement("span",null,"\u2014"),React.createElement("div",{className:"input-group date col-sm-4"},React.createElement("input",{type:"text",className:"form-control max-date",ref:"max_date",onSelect:this.handleChange}),React.createElement("span",{className:"input-group-addon"},React.createElement("i",{className:"fa fa-calendar"})))))))}}),ViewModal=React.createClass({displayName:"ViewModal",onModalEdit:function(){this.props.handleModalEdit(!0)},rawMarkup:function(){return{__html:this.props.note.content}},render:function(){if(this.props.note.category)var e=this.props.note.category.name;return React.createElement("div",{className:"modal-content view-modal"},React.createElement("div",{className:"modal-header"},React.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},React.createElement("span",{"aria-hidden":"true"},"\xd7")),React.createElement("h2",{className:"view-title"},this.props.note.title),React.createElement("div",{className:"modal-body"},React.createElement("h3",null,"Category"),React.createElement("h4",{className:"view-category"}," ",e," "),React.createElement("h3",null,"Text"),React.createElement("div",{dangerouslySetInnerHTML:this.rawMarkup()})),React.createElement("div",{className:"modal-footer"},React.createElement("button",{type:"button",className:"btn btn-primary note-edit",onClick:this.onModalEdit},"Edit"),React.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"))))}});