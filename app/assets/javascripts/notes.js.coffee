flexynote.notes =
  index: ->
    $(window).load ->
      $('.datepicker').datepicker({
          todayHighlight: true,
          clearBtn: true,
          autoclose: true
      })
