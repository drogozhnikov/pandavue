const SERV_URL = 'http://192.168.100.4:8080';
// const SERV_URL = 'http://localhost:8080';

class UtilService {

    async copyToClipboard(data) {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(data);
        } else {
            // Use the 'out of viewport hidden text area' trick
            const textArea = document.createElement("textarea");
            textArea.value = data;

            // Move textarea out of the viewport so it's not visible
            textArea.style.position = "absolute";
            textArea.style.left = "-999999px";

            document.body.prepend(textArea);
            textArea.select();

            try {
                document.execCommand('copy');
            } catch (error) {
                console.error(error);
            } finally {
                textArea.remove();
            }
        }
    }

    getServerUrl(){
        return SERV_URL;
    }
}

export default new UtilService();

