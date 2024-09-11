//Utilizamos a CDN https://sweetalert2.github.io/ para fazer um alert mais bonito

document.getElementById('btn').addEventListener('click', function() {

    Swal.fire({
        title: '<strong>Página Desenvolvida com Express</strong>',
        icon: 'info',
        html: `Utilizamos os métodos express.static() e app.use() para marcar o diretório onde estão os nossos arquivos estáticos, o método app.get() para tratar a requisição do tipo get na rota "/" e o método app.listen() para inicializar um servidor escutando a rota criada.`,
    });

});

  


  