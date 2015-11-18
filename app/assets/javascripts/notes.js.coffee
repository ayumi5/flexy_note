flexynote.notes =
  index: ->
    $(document).ready ->
      setTimeout ->
        $('.datepicker').datepicker(
          format: 'yyyy/mm/dd'
          todayHighlight: true
        ).on 'changeDate', ->
            $(this).trigger 'select'
      , 0
