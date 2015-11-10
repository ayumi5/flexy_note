flexynote.notes =
  index: ->
    $(document).ready ->
      setTimeout ->
        $('.datepicker').datepicker(
          format: 'yyyy/mm/dd'
          clearBtn: true
          todayHighlight: true
        ).on 'changeDate', ->
            $(this).trigger 'select'
      , 0
