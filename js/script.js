$(document).ready(function () {
    const loader = $('#loader');
    const resumoTodos = $('#resumo-todos');
    const resumoNormal = $('#resumo-normal');
    const resumoCritico = $('#resumo-critico');
    const resumoAlerta = $('#resumo-alerta');
    const resumoAcionamentos = $('#resumo-acionamentos');
    const table = $('#table');

    function fetchData() {
        loader.show();
        // Simulação de busca de dados
        setTimeout(() => {
            loader.hide();
            // Atualizar valores dos resumos com dados simulados
            resumoTodos.text('123');
            resumoNormal.text('100');
            resumoCritico.text('20');
            resumoAlerta.text('3');
            resumoAcionamentos.text('1');

            // Atualizar tabela com dados simulados
            const tableContent = `
                <tr>
                    <td><input type="checkbox"></td>
                    <td>20/07/2024</td>
                    <td>10:00</td>
                    <td>Alarme 1</td>
                    <td>Descrição do alarme 1</td>
                    <td>Cliente 1</td>
                    <td>Unidade 1</td>
                    <td>Serviço 1</td>
                    <td>Endereço 1</td>
                    <td>Cidade 1</td>
                    <td>UF</td>
                    <td>Status</td>
                </tr>
            `;
            table.find('tbody').html(tableContent);
        }, 1000);
    }

    fetchData();

    $('#acao_atualizar').on('click', function () {
        fetchData();
    });

    $('#finaliza_botao').on('click', function () {
        // Lógica para finalizar alarmes selecionados
        Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Alarmes finalizados com sucesso!',
        });
    });

    $('#blackout_botao').on('click', function () {
        // Lógica para cadastrar blackout
        Swal.fire({
            icon: 'info',
            title: 'Cadastro de Blackout',
            text: 'Blackout cadastrado com sucesso!',
        });
    });

    $('#sair_botao').on('click', function () {
        // Lógica para sair da console
        Swal.fire({
            icon: 'warning',
            title: 'Sair',
            text: 'Você tem certeza que deseja sair?',
            showCancelButton: true,
            confirmButtonText: 'Sim, sair!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/logout';
            }
        });
    });

    $('#filter').on('click', function () {
        // Lógica para ativar filtros
        Swal.fire({
            icon: 'info',
            title: 'Filtros ativados',
            text: 'Filtros aplicados com sucesso!',
        });
    });

    $('#select-clientes').select2({
        theme: 'bootstrap4'
    });

    $('#check-all').on('change', function () {
        $('input[type="checkbox"]').prop('checked', this.checked);
    });

    function updateDateTime() {
        $('#date_time').text(new Date().toLocaleString());
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    $('#flag_beep_sound_botao').on('click', function () {
        const icon = $(this).find('i');
        if (icon.hasClass('fa-volume-up')) {
            icon.removeClass('fa-volume-up').addClass('fa-volume-mute');
        } else {
            icon.removeClass('fa-volume-mute').addClass('fa-volume-up');
        }
    });
});
