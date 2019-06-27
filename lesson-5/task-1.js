'use strict';

const $board = document.getElementById('board');

const $table = document.createElement('table');
for (let i = 0; i < 10; i++) {
    const $row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        const $cell = document.createElement('td');

        // Добавление буквенных обозначений на доску
        if ((i == 0 || i == 9) && j > 0 && j < 9) {
            $cell.textContent = String.fromCharCode(64 + j);
        }

        // Добавление цифровых обозначений на доску
        if((j==0 || j == 9) && i > 0 && i < 9){
            $cell.textContent = i;
        }

        // Добавление цвета черным клеткам
        if(i > 0 && i < 9 && j > 0 && j < 9){
            if((j%2 === 1 && i%2 === 1) || (j%2 === 0 && i%2 === 0)){
                $cell.classList.add('black_field');
            }
        }

        $row.appendChild($cell);
    }
    $table.appendChild($row);
}

$board.appendChild($table);
