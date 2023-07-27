import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/core/utils';
import { User } from 'src/app/core/user';




@Component({
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss']
})
export class HelloPage implements OnInit{


  constructor(protected utils: Utils, protected user: User) {

  }
  ngOnInit(): void {
    
  }

  logoff() {
    this.user.logoff();
  }

  error() {
    throw new Error("Teste tratamento de erro centralizado em GlobalErrorHandler")
  }

  showMsg() {
    this.utils.exibirInformacao("Uso de Utils para exibir Toast de informacao");
  }

  get data(): Date {
    return new Date()
  }


  showConf() {
    let lDialogConfirmacao = this.utils.abrirDialogConfirmacao("Você nasceu nasceu na Bahia?")


    //Com a referência após ser fechado se a exclusão for confirmada irá prosseguir para excluir o registro do banco de dados
    lDialogConfirmacao.afterClosed().subscribe(confirmado => {
      if(confirmado){
        this.utils.exibirSucesso("Voçê é baiano!")
      }else{
        this.utils.exibirWarning("Você não é baiano")
      }

    })
  }

}
