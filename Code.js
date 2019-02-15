<script>
  $('.elShippingForm select[name="country"]').change(function() {
    if($(this).val()!='United States' && $(this).val()!=''){
      $(this).val('United States');
      $('#cfptPopClicker').click();
    }
});
  $('body').append('<a id="cfptPopClicker" href="#open-popup" style="display: none;"></a>');
</script>
<script>
  $('#closeCFPOPUP').click(function(){
    location.reload();
    });
</script>
