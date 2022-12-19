import ASN1 from '@lapo/asn1js'

const decodeHelper = (certData) => {
    let reader = new FileReader()
    reader.readAsText(certData, 'utf-8')
    reader.onload = function () {
        console.log(reader.result)
        const result = ASN1.decode(reader.result);
        console.log(result)
        // decodeBinaryString(reader.result);
    }
    reader.onerror = function () {
        console.log(reader.error)
    }


}
export {
    decodeHelper
}
