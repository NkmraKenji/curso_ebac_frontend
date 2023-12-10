
$(document).ready(function() {
    $("form").on("submit", function (e) {
        e.preventDefault();
        const new_task = $(".task").val();

        const rep_task = $("ul li")
            .toArray()
            .some((li) => $(li).text() === new_task);
        if (rep_task) {
            alert("Esta tarefa já existe");
            return;
        }

        const list_task = $(`<li class="has-marker">${new_task}</li>`);
        $(list_task).appendTo("ul");
        $(".task").val("");
    });

    $("ul").on("click", "li", function(){
        $(this).toggleClass("strike-through");
    });
});
