export default function generateUniqueId(type) {
    if(type == 'number') return Date.now();

    return 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
}