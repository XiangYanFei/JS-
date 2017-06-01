// Write your cade below:
function caclRemaindar(a,b) {
      return a%b;
};

function caclSum(arr1) {
    var sum1=0;
    for(var i=0;i< arr1.length;i++)
    {
        sum1+=arr1[i];
    }
    return sum1;
};

function caclSumInConditon(arr2,n) {
    var sum2=0;
    for(var i=0;i<arr2.length;i++)
    {
        if(arr2[i]<n){
            sum2+=arr2[i];
        }
    }
    return sum2;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}