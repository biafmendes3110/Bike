function ModalSuccess() {
  Swal.fire({
      title: "Item adicionado ao carrinho!",
      text: "Adicionado ao carrinho",
      icon: "success"
  });
}

function ModalFinalizado() {
  Swal.fire({
      title: "Deseja finalizar a compra?",
      text: "deseja finalizar?",
      icon: "success"
  }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Compra Finalizada!",
          text: "Obrigado por sua comrpa",
          icon: "success"
        });
      }
    });
}
