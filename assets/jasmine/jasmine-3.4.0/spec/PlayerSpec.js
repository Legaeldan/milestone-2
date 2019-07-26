describe('Main control control button functions', function() {
  
    beforeEach(() => {

        spyEvent = spyOnEvent(".speedControl", 'click');
        setFixtures(`
        <button type="button" class="btn btn-success speedControl mainControls" id="easy"></button>
        <button type="button" class="btn btn-danger speedControl mainControls" id="easy"></button>
        <button type="button" class="btn btn-success speedControl mainControls" id="medium"></button>
        <button type="button" class="btn btn-danger speedControl mainControls" id="medium"></button>
        <button type="button" class="btn btn-success speedControl mainControls" id="hard"></button>
        <button type="button" class="btn btn-danger speedControl mainControls" id="hard"></button>
        
        `)
    });

    describe('on click easy difficulty button', function() {
        it('should remove class "btn-success" from current clicked button', function() {
            $("#easy").click();
            expect($("#easy").hasClass('btn-success')).toBe(true);
        });
        it('should add class "btn-danger" to current clicked button', function() {
            $("#easy").click();
            expect($("#easy")).not.toHaveClass('btn-danger');
        });
        it('should change tempo to current setting', function() {
            $("#easy").click();
            expect(tempo).toEqual(easy);
        });
    });

        describe('on click medium difficulty button', function() {
            it('should remove class "btn-success" from current clicked button', function() {
                $("#medium").click();
                expect($("#medium")).toHaveClass('btn-success');
            });
            it('should add class "btn-danger" to current clicked button', function() {
                $("#medium").click();
                expect($("#medium")).not.toHaveClass('btn-danger');
            });
            it('should change tempo to current setting', function() {
                $("#medium").click();
                expect(eval(tempo)).toEqual(medium);
            });

        });
            describe('on click hard difficulty button', function() {
                it('should remove class "btn-success" from current clicked button', function() {
                    $("#hard").trigger("click");
                    expect($("#hard")).toHaveClass('btn-success');
                });
                it('should add class "btn-danger" to current clicked button', function() {
                    $("#hard").trigger("click");
                    expect($("#hard")).not.toHaveClass('btn-danger');
                });
                it('should change tempo to current setting', function() {
                    $("#hard").trigger("click");
                    expect(eval(tempo)).toEqual(hard);
                });
            });
 
    });


