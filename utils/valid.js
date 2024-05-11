
// 实现禁止输入特殊字符,并且不超多number字符长度
function(value, number = 255) {
  value = value.replace(/[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g, '').replace(/\s/g, '')
  if (value.length >= number) {
    value = value.slice(0, number)
    this.$message({
      type: 'warning',
      message: `输入内容不能超过${number}个字符`
    })
  }
  return value
}
