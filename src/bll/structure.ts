import { apiGetStructure } from '@/apis/structure';
export const getStructure = async (pid) => {
    return new Promise(async (resolve) => {
        const res = await apiGetStructure(pid);
        if (res && res.data && res.data.length) {
            const options = [];
            res.data.forEach((item) => {
                options.push({
                    value: item.structureID,
                    label: item.structureName,
                    // pId: item.parentID,
                    // id: item.structureID,
                    isLeaf: false,
                });
            });
            resolve(options);
        }
    });
};
