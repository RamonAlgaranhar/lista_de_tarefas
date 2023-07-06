$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaAtividade = $("#new-activit").val();
        $(`<li>${novaAtividade}</li>`).appendTo('ul');
        $("#new-activit").val("");

        $('li').click(function(){
            $(this).css({"text-decoration":"line-through"});
        })
    })  
})