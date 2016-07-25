var phBook = angular.module('phBook', ['ngSanitize']);

phBook.controller('phBookCtrl', function($scope) {
    $scope.getList = function() {
        var list = [
            {name: "Bob", surname: "Dylan", phone: "777-77-77", comment: "How many roads must a man walk down<br>Before you call him a man?<br>How many seas must a white dove sail<br>Before she sleeps in the sand?"},
            {name: "John", surname: "Lennon", phone: "333-756-75", comment: "You may say I'm a dreamer<br>But I'm not the only one<br>I hope someday you'll join us<br>And the world will be as one"},
            {name: "Amy", surname: "Winehouse", phone: "666-232-37", comment: "We only said goodbye with words<br>I died a hundred times<br>You go back to her<br>And I go back to black"},
            {name: "Janis", surname: "Joplin", phone: "643-212-18", comment: "Didn't I make you feel like you were the only man - yeah!<br>An' didn't I give you nearly everything that a woman possibly can?<br>Honey, you know I did!"},
            {name: "Mick", surname: "Jagger", phone: "123-243-76", comment: "God gave me everything I want<br>Come on<br> I'll give it all to you"},
            {name: "Marianne", surname: "Faithfull", phone: "435-434-12", comment: "It is the evening of the day<br>I sit and watch the children play<br>Smiling faces I can see<br>But not for me<br>I sit and watch as tears go by"},
        ]
        return list;
    }
    
    $scope.list = $scope.getList();
    

});