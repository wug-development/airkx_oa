export const infoWage = [
    {
        name: 'basewage',
        label: '基本工资',
    },
    {
        name: 'subsidy',
        label: '补助',
    },
    {
        name: 'bonus',
        label: '考勤奖',
    },
    {
        name: 'tax',
        label: '个税',
    },
    {
        name: 'insurance',
        label: '保险',
    },
    {
        name: 'gongjijin',
        label: '保险',
    },
];

export const wagelistmodel = () => {
    const arr = [
        {
            title: '年',
            dataIndex: 'year',
            key: 'year',
            width: '60px',
            align: 'center',
        },
    ];
    for (let i = 1; i <= 12; i++) {
        arr.push({
            title: i + '月',
            dataIndex: `${i}`,
            key: `${i}`,
            width: '80px',
            align: 'center',
        });
    }
    console.log('model :>> ', arr);
    return arr;
};

export const dealArr = (arr) => {
    const obj = {};
    const years = [];
    arr.forEach((item) => {
        obj[item.year + item.month] = item;
        if (!years.includes(item.year)) {
            years.push(item.year);
        }
    });
    const list = [];
    for (let year in years) {
        const json = {
            year: years[year],
            data: [],
        };
        for (let j = 1; j <= 12; j++) {
            if (obj['' + years[year] + j]) {
                json.data.push(obj['' + years[year] + j]);
            } else {
                json.data.push({
                    tip: '未获得',
                });
            }
        }
        list.push(json);
    }
    return list;
};
