' Programmer: Cody Griffin
' Date: 4/29/2017
' Program: FizzBuzz in VB.NET
Module Module1

    Sub Main()
        Dim i As Integer

        For i = 1 To 100
            If i Mod 15 = 0 Then
                Console.WriteLine("FizzBuzz")

            ElseIf i Mod 3 = 0 Then
                Console.WriteLine("Fizz")

            ElseIf i Mod 5 = 0 Then
                Console.WriteLine("Buzz")

            Else
                Console.WriteLine(i)

            End If
        Next
        Console.ReadLine()
    End Sub

End Module
