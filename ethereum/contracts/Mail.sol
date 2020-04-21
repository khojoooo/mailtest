pragma solidity ^0.4.17;

contract MailFactory {
    address[] public deployedMails;

    function createMail() public returns(address){
        address newMail = new Mail(msg.sender);// manager address로 변경 하기
        deployedMails.push(newMail);
        return newMail;
    }

    function getDeployedMails() public view returns (address[]){
        return deployedMails;
    }
}

contract Mail{
    struct SenderInfo {
        string senderName;
        string senderPhone;
        string senderEmail;
        string senderAddress;
    }

    struct ReceiverInfo{
        string receiverName;
        string receiverPhone;
        string receiverAddress;
    }

    struct MailInfo{
        string mailName;
        uint price;
        uint mailQuantity;
        uint weight;
        string other;
        bytes32 password;
        bool complete;
    }

    SenderInfo[] public senderInfos;
    ReceiverInfo[] public receiverInfos;
    MailInfo[] public mailInfos;
    address public manager;

    function Mail(address creator) public {
        manager = creator;// manager address로 변경 하기
    }

    function addSenderInfo(string senderName, string senderPhone, string senderEmail, string senderAddress) public {
        SenderInfo memory newSenderInfo = SenderInfo({
            senderName: senderName,
            senderPhone: senderPhone,
            senderEmail: senderEmail,
            senderAddress: senderAddress
        });
        senderInfos.push(newSenderInfo);
    }

    function addReceiverInfo(string receiverName, string receiverPhone, string receiverAddress) public {
        ReceiverInfo memory newReceiverInfo = ReceiverInfo({
            receiverName: receiverName,
            receiverPhone: receiverPhone,
            receiverAddress: receiverAddress
        });
        receiverInfos.push(newReceiverInfo);
    }

    function addMailInfo(string mailName,uint price, uint mailQuantity, uint weight,string other, string password) public {
        MailInfo memory newMailInfo = MailInfo({
            mailName: mailName,
            price: price,
            mailQuantity: mailQuantity,
            weight: weight,
            other: other,
            password: keccak256(password),
            complete: false
        });
        mailInfos.push(newMailInfo);
    }

    function mailComplete(uint index, string password) public {
        MailInfo storage mailInfo = mailInfos[index];

        //require(배송기사 맞는지 확인 넣기)

        require(mailInfo.password == keccak256(password));
        mailInfo.complete = true;
    }

    function senderLength() public view returns (uint) {
        return senderInfos.length;
    }

    function receiverLength() public view returns (uint) {
        return receiverInfos.length;
    }

    function mailLength() public view returns (uint) {
        return mailInfos.length;
    }
}
