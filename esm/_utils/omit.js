function omit(obj, keys) {
    const clone = Object.assign({}, obj);
    keys.forEach(key => {
        if (key in clone) {
            delete clone[key];
        }
    });
    return clone;
}

export { omit as default };
