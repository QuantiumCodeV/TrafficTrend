@props(['messages'])

@if ($messages)
    <ul {{ $attributes->merge(['class' => 'text-sm space-y-1']) }}>
        @foreach ((array) $messages as $message)
            <li style="color:#d93d46">{{ $message }}</li>
        @endforeach
    </ul>
@endif
