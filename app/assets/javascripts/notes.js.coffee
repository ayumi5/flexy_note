flexynote.notes =
  index: ->
    $(document).ready ->
      setTimeout ->
        $('.input-group.date').datepicker(
          format: 'yyyy/mm/dd'
          todayHighlight: true
        ).on 'changeDate', ->
            $(this).trigger 'select'
      , 0
