const data = {
    "CHR": [
        {"judge": "艰难", "grade": 0},
        {"min":1, "judge": "困难", "grade": 0},
        {"min":2, "judge": "不佳", "grade": 0},
        {"min":4, "judge": "普通", "grade": 0},
        {"min":7, "judge": "优秀", "grade": 1},
        {"min":9, "judge": "罕见", "grade": 2},
        {"min":11, "judge": "逆天", "grade": 3},
    ],
    "MNY": [
        {"judge": "艰难", "grade": 0},
        {"min":1, "judge": "困难", "grade": 0},
        {"min":2, "judge": "不佳", "grade": 0},
        {"min":4, "judge": "普通", "grade": 0},
        {"min":7, "judge": "优秀", "grade": 1},
        {"min":9, "judge": "罕见", "grade": 2},
        {"min":11, "judge": "逆天", "grade": 3},
    ],
    "SPR": [
        {"judge": "艰难", "grade": 0},
        {"min":1, "judge": "困难", "grade": 0},
        {"min":2, "judge": "不幸", "grade": 0},
        {"min":4, "judge": "普通", "grade": 0},
        {"min":7, "judge": "幸福", "grade": 1},
        {"min":9, "judge": "极乐", "grade": 2},
        {"min":11, "judge": "天命", "grade": 3},
    ],
    "INT": [
        {"judge": "艰难", "grade": 0},
        {"min":1, "judge": "困难", "grade": 0},
        {"min":2, "judge": "不佳", "grade": 0},
        {"min":4, "judge": "普通", "grade": 0},
        {"min":7, "judge": "优秀", "grade": 1},
        {"min":9, "judge": "罕见", "grade": 2},
        {"min":11, "judge": "逆天", "grade": 3},
    ],
    "STR": [
        {"judge": "艰难", "grade": 0},
        {"min":1, "judge": "困难", "grade": 0},
        {"min":2, "judge": "不佳", "grade": 0},
        {"min":4, "judge": "普通", "grade": 0},
        {"min":7, "judge": "优秀", "grade": 1},
        {"min":9, "judge": "罕见", "grade": 2},
        {"min":11, "judge": "逆天", "grade": 3},
    ],
    "AGE": [
        {"judge": "闭门羹", "grade": 0},
        {"min":24, "judge": "一日游", "grade": 1},
        {"min":48, "judge": "两日游", "grade": 2},
        {"min":72, "judge": "三日游", "grade": 3},
    ],
    "SUM": [
        {"judge": "艰难", "grade": 0},
        {"min":41, "judge": "困难", "grade": 0},
        {"min":50, "judge": "不佳", "grade": 0},
        {"min":60, "judge": "普通", "grade": 0},
        {"min":80, "judge": "优秀", "grade": 1},
        {"min":100, "judge": "罕见", "grade": 2},
        {"min":110, "judge": "逆天", "grade": 3},
        {"min":120, "judge": "传说", "grade": 3},
    ]
}

function summary(type, value) {
    let length = data[type].length;
    while(length--) {
        const {min, judge, grade} = data[type][length];
        if(min==void 0 || value >= min) return {judge, grade};
    }
}

export { summary };