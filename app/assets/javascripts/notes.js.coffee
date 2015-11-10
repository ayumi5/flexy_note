flexynote.notes =
  index: ->
    $(window).load ->
      $('.datepicker').datepicker(
        format: 'yyyy/mm/dd'
        clearBtn: true
        todayHighlight: true
      ).on 'changeDate', ->
          $(this).trigger 'change'
