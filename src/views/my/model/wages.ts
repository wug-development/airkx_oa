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
