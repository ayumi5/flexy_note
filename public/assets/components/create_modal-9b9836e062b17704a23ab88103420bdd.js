var CreateModal=React.createClass({displayName:"CreateModal",onNoteCreate:function(e){e.preventDefault();var t="create-content-modal",a=this.refs.title.value.trim(),o=this.refs.category.value.trim(),r=CKEDITOR.instances[t],n=r.getData().trim(),c={note:{title:a,category:o,content:n}};this.props.handleNoteSubmit(c,this.refs.form.action,"POST"),this.refs.title.value="",this.refs.category.value="",r.setData("")},componentDidMount:function(){this.props.onModalLoaded(this.refs.content,this.refs.category,!0)},componentWillUnmount:function(){this.props.onModalLoaded(this.refs.content,this.refs.category,!1)},render:function(){return React.createElement("div",{className:"note-modal modal fade",id:"note-modal-create",ref:"modal"},React.createElement("div",{className:"modal-dialog"},React.createElement("div",{className:"modal-content edit-modal"},React.createElement("div",{className:"modal-header"},React.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},React.createElement("span",{"aria-hidden":"true"},"\xd7")),React.createElement("form",{ref:"form",role:"form",action:"notes",method:"POST",onSubmit:this.onNoteCreate},React.createElement("div",{className:"form-group"},React.createElement("input",{ref:"title",className:"form-control edit-title",placeholder:"Type in title here"}),React.createElement("div",{className:"modal-body"},React.createElement("h3",null,"Category"),React.createElement("input",{ref:"category",className:"form-control edit-category",id:"create-category-modal"}),React.createElement("h3",null,"Text"),React.createElement("textarea",{ref:"content",className:"form-control edit-content",rows:"10",id:"create-content-modal"}))),React.createElement("div",{className:"modal-footer"},React.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),React.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close")))))))}});