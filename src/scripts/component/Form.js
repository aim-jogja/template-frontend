const Form = ( Judul ) => {
    return(`
            <div class="form-container">
                <div class="wrapper">
                    <form action="" method="post" id="forminput">
                        <h1>${Judul}</h1>
                        <label>Name : </label>
                        <input type="text" name="name" id="name">
                        <label>Qty : </label>
                        <input type="number" name="qty" id="qty">
                        <input type="submit" value="Tambah" name="submit" id="submit">
                    </form>
                </div>
            </div>
        `);
}

export default Form;