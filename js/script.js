var contacts = new Vue({
    el: '#app',
    data: {
        addMessage: '',
        selectedChat: 0,
        searchContacText: '',
        items: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
        changeChat(index) {
            this.selectedChat = index
        },
        eventMessage() {
            if (this.addMessage.length > 0) {
                let newMessage = {
                    date: moment().format('YYYY MM DD, h:mm:ss a'),
                    text: this.addMessage,
                    status: 'sent'
                };
                this.items[this.selectedChat].messages.push(newMessage);
                this.addMessage = '';

            }
            setTimeout(this.autoAnswer, 1000);
        },
        autoAnswer() {

            let answer = {
                date: moment().format('YYYY MM DD, h:mm:ss a'),
                text: 'ok',
                status: 'received'
            }
            this.items[this.selectedChat].messages.push(answer);

        },
        searchContact() {
            this.items.forEach(element => {
                if (element.name.toLowerCase().includes(this.searchContacText.toLowerCase())) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }

            });
        }

    }






})


// var moment = require('moment');
// moment().format();




